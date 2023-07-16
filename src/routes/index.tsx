import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TextImage } from "~/components/text-image/tex-image";



export default component$(() => {
  return (
    <>
     <h1 class="text-4xl font-bold m-4">Probando Qwik</h1>
      <TextImage />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
