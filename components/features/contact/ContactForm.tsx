"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Send, MapPin, Phone, LucideIcon } from "lucide-react";
import { toast } from "sonner";
import SocialIcons from "@/components/common/Social Icons";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;


export function ContactForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onSubmit = async (data: FormData) => {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Message sent successfully!");
        form.reset();
    };

    interface ContactItem {
        label: string;
        value: string;
        icon: LucideIcon;
    }

    const contactInfo: ContactItem[] = [
        {
            label: "Email",
            value: "kenjicaaayohan55@gmail.com",
            icon: Send,
        },
        {
            label: "Phone",
            value: "+63 926 474 7970",
            icon: Phone,
        },
        {
            label: "Address",
            value: "Poblacion, Cordova, Cebu",
            icon: MapPin,
        }
    ];

    return (
        <div className="w-full bg-secondary">
            <Section className="space-y-12 min-h-screen container mx-auto px-5 md:px-7 lg:px-10">
                {/* ── top: info + form ── */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* left: get in touch + socials */}
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <h1 className="text-3xl font-semibold tracking-tight">Get in Touch</h1>
                            {contactInfo.map((info) => {
                                const Icon = info.icon;

                                return (
                                    <div key={info.label} className="flex items-center gap-3">

                                        <div className="h-9 w-9 flex items-center justify-center rounded-full bg-card text-primary shrink-0">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{info.label}</p>
                                            <p className="text-sm text-muted-foreground">{info.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold tracking-tight">Socials</h2>
                            <SocialIcons/>
                        </div>
                    </div>

                    {/* right: contact form */}
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Send A Message</CardTitle>
                            <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Controller
                                            name="name"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                                    <Input
                                                        {...field}
                                                        id="name"
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="John Doe"
                                                        autoComplete="name"
                                                    />
                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name="email"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                                    <Input
                                                        {...field}
                                                        id="email"
                                                        type="email"
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder="john@example.com"
                                                        autoComplete="email"
                                                    />
                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </Field>
                                            )}
                                        />
                                    </div>

                                    <Controller
                                        name="subject"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="subject"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="Project Inquiry"
                                                />
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />

                                    <Controller
                                        name="message"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="message">Message</FieldLabel>
                                                <InputGroup>
                                                    <InputGroupTextarea
                                                        {...field}
                                                        id="message"
                                                        placeholder="Tell me about your project..."
                                                        rows={6}
                                                        className="min-h-24 resize-none"
                                                        aria-invalid={fieldState.invalid}
                                                    />
                                                    <InputGroupAddon align="block-end">
                                                        <InputGroupText className="tabular-nums text-xs text-muted-foreground">
                                                            {field.value.length}/500
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />
                                </FieldGroup>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                form="contact-form"
                                className="w-full"
                                size="lg"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </Section>
        </div>
    );
}