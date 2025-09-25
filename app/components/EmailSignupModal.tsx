"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { X } from "lucide-react";

interface EmailSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EmailSignupModal({
  open,
  onOpenChange,
}: EmailSignupModalProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log("Email signup:", email);
    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 bg-white">
        <div className="relative p-12">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-brand-grey hover:text-brand-dark"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="text-center space-y-6">
            <DialogTitle className="text-3xl font-light text-brand-dark">
              Join our list
            </DialogTitle>

            <p className="text-brand-grey leading-relaxed max-w-sm mx-auto">
              Signup to be the first to hear about exclusive deals, special
              offers and upcoming collections
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="flex-1 border-brand-grey border-r-0 rounded-r-none focus:border-brand-dark"
                  required
                />
                <Button
                  type="submit"
                  className="bg-brand-dark hover:bg-brand-muted-purple text-white px-8 rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
