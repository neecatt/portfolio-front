import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import {
  AdminSidebar,
  AdminDashboard,
  ExperienceForm,
  ExperienceList,
  ProjectForm,
  ProjectList,
  EditExperienceModal,
  EditProjectModal,
  DeleteConfirmationDialog,
  ResumeForm,
} from "../../components/Admin";
import { TJob } from "../../types/job.type";
import { TProject } from "../../types/project.type";
import { useApi } from "../../hooks/useApi";
import { useForm } from "../../hooks/useForm";

const Admin: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [techInput, setTechInput] = useState("");
  const [currentItemId, setCurrentItemId] = useState<string>("");


  const toast = useToast();

  const {
    experiencesState,
    projectsState,
    fetchExperiences,
    fetchProjects,
    createExperience,
    createProject,
    updateExperience,
    updateProject,
    deleteExperience,
    deleteProject,

  } = useApi();

  const experiences = experiencesState.data || [];
  const projects = projectsState.data || [];

  const {
    formData: experienceForm,
    handleChange: handleExperienceChange,
    handleSubmit: submitExperience,
    resetForm: resetExperienceForm,
    setFormData: setExperienceForm,
  } = useForm<TJob>({
    initialValues: {
      jobTitle: "",
      companyName: "",
      date: "",
      description: [],
      latest: false,
    },
    onSubmit: async (data) => {
      await createExperience(data);
      toast({
        title: "Experience added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      resetExperienceForm();
    },
  });

  const {
    formData: projectForm,
    resetForm: resetProjectForm,
    setFormData: setProjectForm,
  } = useForm<TProject>({
    initialValues: {
      title: "",
      description: "",
      githubLink: "",
      websiteLink: "",
      techStack: [],
      category: "Full-Stack",
    },
    onSubmit: async (data) => {},
  });

  const {
    isOpen: isEditExpOpen,
    onOpen: onEditExpOpen,
    onClose: onEditExpClose,
  } = useDisclosure();
  const {
    isOpen: isEditProjOpen,
    onOpen: onEditProjOpen,
    onClose: onEditProjClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteExpOpen,
    onOpen: onDeleteExpOpen,
    onClose: onDeleteExpClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteProjOpen,
    onOpen: onDeleteProjOpen,
    onClose: onDeleteProjClose,
  } = useDisclosure();

  const cancelExpRef = useRef<HTMLButtonElement>(null);
  const cancelProjRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [experienceResult, projectResult] =
    await Promise.allSettled([
      fetchExperiences(),
      fetchProjects(),
    ]);

        if (
          experienceResult.status === "rejected" ||
          projectResult.status === "rejected"
        ) {
          toast({
            title: "Some data could not be loaded",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    loadData();
  }, []);

  const handleProjectChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProjectForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTechItem = () => {
    if (techInput.trim()) {
      const newTech = techInput.trim();
      if (
        !projectForm.techStack.some(
          (tech) => (typeof tech === "string" ? tech : tech.name) === newTech
        )
      ) {
        setProjectForm((prev) => ({
          ...prev,
          techStack: [...prev.techStack, newTech],
        }));
        setTechInput("");
      }
    }
  };

  const removeTechItem = (item: string) => {
    setProjectForm((prev) => ({
      ...prev,
      techStack: prev.techStack.filter(
        (tech) => (typeof tech === "string" ? tech : tech.name) !== item
      ),
    }));
  };

  const submitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formattedProject = {
        ...projectForm,
        techStack: projectForm.techStack.map((tech) =>
          typeof tech === "string" ? tech : tech.name
        ),
      };

      const createdProject = await createProject(formattedProject);

      resetProjectForm();
      setTechInput("");

      toast({
        title: "Project added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        fetchProjects().catch((fetchError) => {
          console.error("Error fetching updated projects:", fetchError);
        });
      }, 500);

      return createdProject;
    } catch (error) {
      console.error("Failed to create project:", error);
      toast({
        title: "Error adding project",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditExperience = (exp: TJob, id: string) => {
    setExperienceForm(exp);
    setCurrentItemId(id);
    onEditExpOpen();
  };

  const handleEditProject = (proj: TProject, id: string) => {
    setProjectForm(proj);
    setCurrentItemId(id);
    onEditProjOpen();
  };

  const handleUpdateExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateExperience(currentItemId, experienceForm);

      onEditExpClose();

      await fetchExperiences();

      resetExperienceForm();

      toast({
        title: "Experience updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to update experience:", error);
      toast({
        title: "Error updating experience",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formattedProject = {
        ...projectForm,
        techStack: projectForm.techStack.map((tech) =>
          typeof tech === "string" ? tech : tech.name
        ),
      };

      await updateProject(currentItemId, formattedProject);

      onEditProjClose();

      await fetchProjects();

      resetProjectForm();
      setTechInput("");

      toast({
        title: "Project updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to update project:", error);
      toast({
        title: "Error updating project",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteExperienceConfirm = (id: number | string) => {
    setCurrentItemId(typeof id === "number" ? id.toString() : id);
    onDeleteExpOpen();
  };

  const handleDeleteProjectConfirm = (id: number | string) => {
    setCurrentItemId(typeof id === "number" ? id.toString() : id);
    onDeleteProjOpen();
  };

  const handleDeleteExperience = async () => {
    try {
      await deleteExperience(currentItemId);

      onDeleteExpClose();

      await fetchExperiences();

      toast({
        title: "Experience deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to delete experience:", error);
      toast({
        title: "Error deleting experience",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteProject = async () => {
    try {
      await deleteProject(currentItemId);

      onDeleteProjClose();

      await fetchProjects();

      toast({
        title: "Project deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to delete project:", error);
      toast({
        title: "Error deleting project",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box color="white" h="calc(100vh - 3.8rem)" position="relative">
      <Flex direction={{ base: "column", lg: "row" }} h="100%">
        <Box h="100%" position="sticky" top="0">
          <AdminSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </Box>

        <Box flex="1" p={6} overflowY="auto" maxH="calc(100vh - 3.8rem)">
          {activeSection === "dashboard" && (
            <AdminDashboard experiences={experiences} projects={projects} />
          )}

          {activeSection === "experience" && (
            <Box>
              <ExperienceForm
                experienceForm={experienceForm}
                handleExperienceChange={handleExperienceChange}
                submitExperience={submitExperience}
                setExperienceForm={setExperienceForm}
              />
              <ExperienceList
                experiences={experiences}
                handleEditExperience={handleEditExperience}
                handleDeleteExperience={handleDeleteExperienceConfirm}
              />
            </Box>
          )}

          {activeSection === "projects" && (
            <Box>
              <ProjectForm
                projectForm={projectForm}
                techInput={techInput}
                handleProjectChange={handleProjectChange}
                setTechInput={setTechInput}
                addTechItem={addTechItem}
                removeTechItem={removeTechItem}
                submitProject={submitProject}
              />
              <ProjectList
                projects={projects}
                handleEditProject={handleEditProject}
                handleDeleteProject={handleDeleteProjectConfirm}
              />
            </Box>
          )}

          {activeSection === "resume" && (
            <Box>
              <ResumeForm />
            </Box>
          )}
        </Box>
      </Flex>

      <EditExperienceModal
        isOpen={isEditExpOpen}
        onClose={onEditExpClose}
        experienceForm={experienceForm}
        handleExperienceChange={handleExperienceChange}
        updateExperience={handleUpdateExperience}
      />

      <EditProjectModal
        isOpen={isEditProjOpen}
        onClose={onEditProjClose}
        projectForm={projectForm}
        techInput={techInput}
        handleProjectChange={handleProjectChange}
        setTechInput={setTechInput}
        addTechItem={addTechItem}
        removeTechItem={removeTechItem}
        updateProject={handleUpdateProject}
      />

      <DeleteConfirmationDialog
        isOpen={isDeleteExpOpen}
        onClose={onDeleteExpClose}
        onDelete={handleDeleteExperience}
        title="Delete Experience"
        cancelRef={cancelExpRef}
      />

      <DeleteConfirmationDialog
        isOpen={isDeleteProjOpen}
        onClose={onDeleteProjClose}
        onDelete={handleDeleteProject}
        title="Delete Project"
        cancelRef={cancelProjRef}
      />
    </Box>
  );
};

export default Admin;
