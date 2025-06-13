
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

interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (experience: any) => void;
}

const AddExperienceModal = ({ isOpen, onClose, onAdd }: AddExperienceModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    period: "",
    description: "",
    achievements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExperience = {
      ...formData,
      achievements: formData.achievements.split("\n").filter(item => item.trim()),
    };
    onAdd(newExperience);
    setFormData({
      title: "",
      company: "",
      location: "",
      period: "",
      description: "",
      achievements: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Senior Full-Stack Developer"
              required
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g., TechCorp Inc."
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., San Francisco, CA"
                required
              />
            </div>
            <div>
              <Label htmlFor="period">Period</Label>
              <Input
                id="period"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                placeholder="e.g., 2022 - Present"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of your role and responsibilities"
              required
            />
          </div>
          <div>
            <Label htmlFor="achievements">Achievements (one per line)</Label>
            <Textarea
              id="achievements"
              value={formData.achievements}
              onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
              placeholder="Built and deployed 5 major web applications&#10;Mentored 3 junior developers&#10;Reduced server costs by 30%"
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Experience</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;
