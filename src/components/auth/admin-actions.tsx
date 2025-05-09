import { OrganizationsService } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOidc } from "@/oidc";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^\S+$/, { message: "Name must not contain spaces" })
    .transform((val) => val.trim()),
  displayName: z
    .string()
    .min(2)
    .max(50)
    .transform((val) => val.trim()),
});

export function AdminActions() {
  const {
    params: { issuerUri },
  } = useOidc({
    assert: "user logged in",
  });

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      displayName: "",
    },
  });

  // Create Organization
  async function handleCreateOrgSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ handleCreateOrgSubmit ~ values:", values);
    await OrganizationsService.createOrganization("authit-starter-1", {
      ...values,
    })
      .then(() => {
        toast.success("Organization created.");
        setOpen(false);
        form.reset();
      })
      .catch((err) => {
        toast.error(`Error creating organization: ${err.message}`);
      })
      .finally(() => {});
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">Admin Actions</h3>
      <div className="flex flex-wrap gap-2">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary">Create organization</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create organization</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleCreateOrgSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="acme-org" {...field} />
                      </FormControl>
                      <FormDescription>
                        Name for the organization. Must not contain spaces.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline" type="button">
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit">Create</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <Button asChild variant="secondary">
          <Link to={`${issuerUri}/portal`} target="_blank">
            <ExternalLink className="h-4 w-4" />
            Open Admin Portal
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to={`${issuerUri}/wizard`} target="_blank">
            <ExternalLink className="h-4 w-4" />
            Open IdP Wizard
          </Link>
        </Button>
      </div>
    </div>
  );
}
