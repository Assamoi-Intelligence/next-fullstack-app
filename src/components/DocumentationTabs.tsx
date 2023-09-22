import {FC} from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs";

const DocumentationTabs: FC = () => {
    return <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
        <TabsList>
            <TabsTrigger value="nodejs">
                NodeJS
            </TabsTrigger>
            <TabsTrigger value="python">
                Python
            </TabsTrigger>
        </TabsList>
    </Tabs>
}

export default DocumentationTabs;