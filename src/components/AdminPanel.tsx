
import { useState } from "react";
import { Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AdminPanelProps {
  onAddSkill: () => void;
  onAddExperience: () => void;
  onAddProject: () => void;
}

const AdminPanel = ({ onAddSkill, onAddExperience, onAddProject }: AdminPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-4 right-4 z-40">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
          >
            <Settings className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Admin Panel</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              onClick={() => {
                onAddSkill();
                setIsOpen(false);
              }}
              className="justify-start"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Skill
            </Button>
            <Button
              onClick={() => {
                onAddExperience();
                setIsOpen(false);
              }}
              className="justify-start"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Experience
            </Button>
            <Button
              onClick={() => {
                onAddProject();
                setIsOpen(false);
              }}
              className="justify-start"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Project
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
