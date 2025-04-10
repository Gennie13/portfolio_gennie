import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Backend from "@/components/Backend";
import Frontend from "@/components/Frontend";
import Database from "@/components/Database";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-16">
      <main className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold mb-6 sm:text-2xl">Projects</h1>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="w-3/4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <Frontend/>
          </TabsContent>
          <TabsContent value="backend">
            <Backend/>
          </TabsContent>
          <TabsContent value="database">
            <Database/>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  );
}
