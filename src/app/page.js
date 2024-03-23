// import { Button, ButtonGroup, Label } from 'flowbite-react';
// import NavbarComponent from '@/components/navbar';
// import FileUploadComponent from '@/components/fileUpload';
// import Divider from '@/components/divider';

// export default function Home() {
//   return (
//     <div className='bg-blue-50 pb-2'>
//       {/* Navbar */}
//       <NavbarComponent />

//       {/* Main */}
//       <div className="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">

//         <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
//           {/* Left */}
//           <FileUploadComponent />

//           <Divider><p>Alternatively</p></Divider>

//           <Label htmlFor="message" value='Copy & Paste Your Code Here'/>
//           <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your code here..."></textarea>
//           <br></br>

//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose the programming language and it will read your code.</label>
//           <div className='flex items-center justify-center'>
//             <ButtonGroup outline>
//               <Button>Java</Button>
//               <Button>C#</Button>
//               <Button>PHP</Button>
//               <Button>Python</Button>
//             </ButtonGroup>
//           </div>

//           <br></br>
//           <br></br>

//           <div className="grid grid-cols-2">
//             <p className="text-center font-semibold col-span-2">Results</p>
//             <br></br>

//             <div className="col-span-2 grid grid-cols-2 gap-5">
//               <p className="flex items-center justify-end font-bold">Cyclomatic Complexity</p>
//               <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
//             </div>

//             <br></br>

//             <div className="col-span-2 grid grid-cols-2 gap-5">
//               <p className="flex items-center justify-end font-bold">Nodes</p>
//               <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
//             </div>

//             <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
//               <p className="flex items-center justify-end font-bold">Edges</p>
//               <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
//             </div>

//             <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
//               <p className="flex items-center justify-end font-bold">Components</p>
//               <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
//             </div>
//           </div>

//         </div>

//         <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
//           {/* Right */}
//           <div className="h-96 bg-white rounded-lg p-2">
//             <p>Code Preview</p>
//             {/* INSERT READ CODE HERE */}
//           </div>

//           <br></br>

//           <div className='grid grid-cols-2'>
//             <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
//               <p className="flex items-center justify-end font-bold">Code Quality</p>
//               <p className="flex items-center justify-center bg-white rounded-lg w-40 h-10" id="codeQuality">placeholder</p>
//             </div>
//           </div>
//         </div>
//         <Button className='w-full col-start-2'>Save</Button>
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useState, useCallback } from 'react';
import { Button, Label } from 'flowbite-react';
import NavbarComponent from '@/components/navbar'; 
import FileUploadComponent from '@/components/fileUpload'; 
import Divider from '@/components/divider';  
import Calc from '@/components/functions/Calc 1'; 

// function handleSaveClick() {
//     console.log('Save button clicked');
//     if (content === '') {
//         alert('No content to save');
//     }
//     if (metrics.M === 0 && metrics.N === 0 && metrics.E === 0 && metrics.P === 0) {
//         alert('No metrics to save');
//     }

//     console.log('Content:', content);
//     console.log('Metrics:', metrics);
// }

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export default function Home() {
    const [content, setContent] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [metrics, setMetrics] = useState({ E: 0, N: 0, P: 0, M: 0 });
    const [shouldCalculate, setShouldCalculate] = useState(false);

    const handleTextareaChange = (event) => {
        setContent(event.target.value);
        setMetrics({ E: 0, N: 0, P: 0, M: 0 });
        setShouldCalculate(false);
    };

    const updateMetrics = (results) => {
        setMetrics(results);
    };

    const handleTestClick = useCallback(() => {
        setShouldCalculate(true);
    }, []);

    const handleSaveClick = useCallback(() => {
        console.log('Save button clicked');
        if (content === '') {
            alert('No content to save');
        }
        if (metrics.M === 0 && metrics.N === 0 && metrics.E === 0 && metrics.P === 0) {
            alert('Press "Test" to calculate metrics before saving.');
        }
        // console.log('Content:', content);
        // console.log('Calculated Cyclomatic Complexity: ', metrics.M);
        // console.log('Nodes: ', metrics.N);
        // console.log('Edges: ', metrics.E);
        // console.log('Components: ', metrics.P);
        // console.log('Risk:', getRiskLevel(metrics.M));

        let fileMetrics = 'Calculated Cyclomatic Complexity: ' + metrics.M + '\nNodes: ' + metrics.N + '\nEdges: ' + metrics.E + '\nComponents: ' + metrics.P;
        let file = 'Your Code:\n' + content + '\n\n' + fileMetrics + '\n\nRisk:\n' + getRiskLevel(metrics.M);

        download('cyclomatic-complexity.txt', file);
    }, [content, metrics]);

    const handleFileUploadContent = useCallback((fileUploadedContent) => {
        setFileContent(fileUploadedContent);
        if (!content.trim()) {
            setContent(fileUploadedContent);
        }
    }, [content]);

    React.useEffect(() => {
        if (!content.trim() && fileContent) {
            setContent(fileContent);
        }
    }, [content, fileContent]);

    const getRiskLevel = (complexity) => {
        if (complexity >= 1 && complexity <= 10) {
            return "Simple procedure, little risk";
        } else if (complexity >= 11 && complexity <= 20) {
            return "More complex, moderate risk";
        } else if (complexity >= 21 && complexity <= 50) {
            return "Complex, high risk";
        } else if (complexity > 50) {
            return "Untestable code, very high risk";
        }
        return "Unknown";
    };

    return (
        <div className='bg-blue-50 pb-2'>
            <NavbarComponent />
            <div className="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">
                <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
                    <FileUploadComponent onFileContent={handleFileUploadContent} />
                    <Divider><p>Alternatively</p></Divider>
                    <Label htmlFor="message" value='Copy & Paste Your Code Here'/>
                    <textarea
                        id="message"
                        rows="10"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Paste your code here"
                        onChange={handleTextareaChange}
                    ></textarea>
                    <br/>

                    <div className="grid grid-cols-2 gap-5">
                        <p className="text-center font-semibold col-span-2">Results</p>
                        <div className="col-span-2 grid grid-cols-2 gap-5">
                            <p className="flex items-center justify-end font-bold">Cyclomatic Complexity</p>
                            <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10">{metrics.M}</p>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-5">
                            <p className="flex items-center justify-end font-bold">Nodes</p>
                            <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10">{metrics.N}</p>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
                            <p className="flex items-center justify-end font-bold">Edges</p>
                            <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10">{metrics.E}</p>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
                            <p className="flex items-center justify-end font-bold">Components</p>
                            <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10">{metrics.P}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
                    <p className='font-bold'>Code Preview</p>
                    <div className="h-96 bg-white rounded-lg p-2 overflow-auto">
                        <pre>{content}</pre>
                    </div>
                    <div className='grid grid-cols-2'>
                        <Button className='w-full mt-4' onClick={handleTestClick}>Test</Button>
                        <Button className='w-full mt-4' onClick={handleSaveClick}>Save</Button>
                    </div>
                    <br/>
                    <div className='grid grid-cols-2 gap-5 pt-4'>
                        <p className="text-center font-semibold col-span-2">Complexity of Code</p>
                        <div className='col-span-2 grid grid-cols-2 gap-5'>
                            <div className='grid grid-cols-2 gap-5'>
                                <p className='flex items-center justify-end font-bold'>Risk</p>
                                <p className='flex items-center justify-center bg-white rounded-lg w-60 h-10'>{metrics.M && getRiskLevel(metrics.M)}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {shouldCalculate && <Calc code={content} onResults={updateMetrics} />}
        </div>
    );
}

