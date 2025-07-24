import { serve } from "inngest/next";


import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

//create a api that serve zero function


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
