import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { apiService } from "../services/api.service";

interface ResumeContextType {
  resumeUrl: string;
  updateResumeUrlState: (url: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resumeUrl, setResumeUrl] = useState<string>("/resume.pdf");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        const data = await apiService.getResumeUrl("1");
        if (data && data.link) {
          setResumeUrl(data.link);
        }
      } catch (error) {
        console.error("Failed to fetch resume URL:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumeUrl();
  }, []);

  const updateResumeUrlState = (url: string) => {
    setResumeUrl(url);
  };

  return (
    <ResumeContext.Provider value={{ resumeUrl, updateResumeUrlState }}>
      {children}
    </ResumeContext.Provider>
  );
};
