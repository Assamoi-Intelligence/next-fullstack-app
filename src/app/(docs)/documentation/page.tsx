import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { Metadata } from 'next';
import {FC} from 'react';

export const metadata: Metadata = {
    title: "Similarity API | Documentation",
    description: "Free & open-source text similarity API"
}

const DocumentationPage: FC = () => {
    return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            Documentation page
            <LargeHeading>
                Making a request
            </LargeHeading>
            <Paragraph>
                api/v1/similarity
            </Paragraph>
        </div>
    </div>
}

export default DocumentationPage;