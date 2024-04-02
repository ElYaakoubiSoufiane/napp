
"use client"
import { ChangeEvent, useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";
import { Input } from "@/components/ui/input";

interface Props {
  userId: string;
  imageUrl: string;
}

function PostFIXED({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [files, setFiles] = useState("");
  const { startUpload } = useUploadThing("media");

  const { organization } = useOrganization();

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
      // image: "",
    },
  });




  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    await createThread({
      text: values.thread,
      author: userId,
      communityId: organization ? organization.id : null,
      path: pathname,
      // image: files,
    });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
      <FormField
        control={form.control}
        name="thread"
        render={({ field }) => (
          <FormItem className="flex w-full  flex-col gap-3">
            <FormControl className="  border border-white max-w-screen h-auto rounded-[20px] bg-black text-white box-shadow focus:border-[1.5px]">
              <Textarea rows={15} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        type="submit"
        className="bg-black border-dark-4 border w-[200px] mx-auto hover:border-white hover:bg-white hover:text-black font-extrabold"
      >
        Post
      </Button></form>
    </Form>
  );
}

export default PostFIXED;
