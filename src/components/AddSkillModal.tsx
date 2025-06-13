
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (skill: any) => void;
}

const AddSkillModal = ({ isOpen, onClose, onAdd }: AddSkillModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSkill = {
      title: formData.title,
      icon: "Code", // Default icon
      skills: formData.skills.split(",").map(skill => skill.trim()),
    };
    onAdd(newSkill);
    setFormData({ title: "", category: "", skills: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Skill Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Category Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Frontend Development"
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills (comma separated)</Label>
            <Input
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="e.g., React, TypeScript, Tailwind CSS"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Skill</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;
