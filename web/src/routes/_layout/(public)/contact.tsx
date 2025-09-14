import { createFileRoute } from "@tanstack/react-router";

import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Link } from "@tanstack/react-router";
import { Button } from "@/shared/components/ui/button";
import PublicLayout from "@/shared/layouts/public";



const RouteComponent = () => {
  return (
    <PublicLayout>
      <ContactSection />
    </PublicLayout>
  );
}

export const Route = createFileRoute("/_layout/(public)/contact")({
  component: RouteComponent,
});













function ContactSection() {
  return (
    <section className="bg-muted py-15 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="text-4xl font-semibold lg:text-5xl">
          Help us route your inquiry
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          We'll help you find the right plan and pricing for your business.
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                <Link
                  to="mailto:hello@tailus.com"
                  className="text-primary text-lg hover:underline"
                >
                  hello@tailark.com
                </Link>
                <p className="mt-3 text-sm">+243 000 000 000</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Press</h3>
                <Link
                  to="mailto:press@tailark.com"
                  className="text-primary text-lg hover:underline"
                >
                  press@tailark.com
                </Link>
                <p className="mt-3 text-sm">+243 000 000 000</p>
              </div>
            </div>
          </div>
          <ContactUsForm/>
        </div>
      </div>
    </section>
  );
}

const ContactUsForm = () => {
  return (
    <form action="" className="@container lg:col-span-3 bg-white rounded-3xl">
      <Card className="p-8 sm:p-12">
        <h3 className="text-xl font-semibold">
          Let's get you to the right place
        </h3>
        <p className="mt-4 text-sm">
          Reach out to our sales team! We’re eager to learn more about how you
          plan to use our application.
        </p>
        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
          <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
            <div>
              <Label htmlFor="name" className="space-y-2">
                Full name
              </Label>
              <Input type="text" id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input type="email" id="email" required />
            </div>
          </div>
          <div>
            <Label htmlFor="country">Country/Region</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">DR Congo</SelectItem>
                <SelectItem value="2">United States</SelectItem>
                <SelectItem value="3">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="@md:grid-cols-2 grid gap-3 *:space-y-3">
            <div>
              <Label htmlFor="website">Company Website</Label>
              <Input type="url" id="website" />
            </div>
            <div>
              <Label htmlFor="job">Job function</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job function" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Finance</SelectItem>
                  <SelectItem value="2">Education</SelectItem>
                  <SelectItem value="3">Legal</SelectItem>
                  <SelectItem value="4">More</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" rows={3} />
          </div>
          <Button>Submit</Button>
        </div>
      </Card>
    </form>
  );
};
