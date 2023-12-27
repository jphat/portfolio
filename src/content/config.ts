// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import schemas
import { blogSchema } from "@schemas/Blog";
import { clientSchema } from "@schemas/Client";
import { personSchema } from "@schemas/Person";
import { projectSchema } from "@schemas/Project";

// 3. Define collections
const blogCollection = defineCollection({ type: "content", schema: blogSchema });
const clientCollection = defineCollection({ type: "data", schema: clientSchema });
const personCollection = defineCollection({ type: "data", schema: personSchema });
const projectCollection = defineCollection({ type: "content", schema: projectSchema });

// 4. Export `collections` objects to register your collections
export const collections = {
    "blog": blogCollection,
    "client": clientCollection,
    "person": personCollection,
    "project": projectCollection,
};