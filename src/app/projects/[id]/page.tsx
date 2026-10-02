import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

// Static export: pre-render one page per project, and 404 anything else.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}
