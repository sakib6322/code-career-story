
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (project: any) => void;
}

const AddProjectModal = ({ isOpen, onClose, onAdd }: AddProjectModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    demoUrl: "",
    githubUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      technologies: formData.technologies.split(",").map(tech => tech.trim()),
    };
    onAdd(newProject);
    setFormData({
      title: "",
      description: "",
      image: "",
      technologies: "",
      demoUrl: "",
      githubUrl: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., E-Commerce Analytics Dashboard"
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of your project"
              required
            />
          </div>
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/project-image.jpg"
            />
          </div>
          <div>
            <Label htmlFor="technologies">Technologies (comma separated)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="e.g., React, Python, PostgreSQL"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="demoUrl">Demo URL</Label>
              <Input
                id="demoUrl"
                value={formData.demoUrl}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                placeholder="https://demo.example.com"
              />
            </div>
            <div>
              <Label htmlFor="githubUrl">GitHub URL</Label>
              <Input
                id="githubUrl"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/user/repo"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Project</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;
