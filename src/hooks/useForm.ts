import { useState, ChangeEvent } from 'react';
import { TJob } from '../types/job.type';
import { TProject } from '../types/project.type';

type FormData = TJob | TProject;

interface UseFormProps<T extends FormData> {
  initialValues: T;
  onSubmit: (data: T) => Promise<void>;
  validate?: (data: T) => Record<string, string>;
}

export function useForm<T extends FormData>({ 
  initialValues, 
  onSubmit, 
  validate 
}: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'description' && 'description' in formData) {
      const descriptions = Array.isArray(value)
        ? value
        : value.split('\n')
            .map(desc => desc.trim())
            .filter(desc => desc !== '');
      
      setFormData(prev => ({
        ...prev,
        [name]: descriptions
      }));
    } else if (name === 'techStack' && 'techStack' in formData) {
      const techStack = Array.isArray(value)
        ? value
        : [value];
      
      setFormData(prev => ({
        ...prev,
        [name]: techStack
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'latest' ? value === 'true' : value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate) {
      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsSubmitting(false);
        return;
      }
    }

    try {
      await onSubmit(formData);
      setFormData(initialValues);
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData
  };
}