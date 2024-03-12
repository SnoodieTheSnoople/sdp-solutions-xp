import Link from 'next/link';
import { Button, ButtonGroup, Label } from 'flowbite-react';
import NavbarComponent from '@/components/navbar';
import FileUploadComponent from '@/components/fileUpload';
import Divider from '@/components/divider';

export default function Home() {
  return (
    <div className='bg-blue-50 pb-2'>
      {/* Navbar */}
      <NavbarComponent />

      {/* Main */}
      <div className="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">

        <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Left */}
          <FileUploadComponent />

          <Divider><p>Alternatively</p></Divider>

          <Label htmlFor="message" value='Copy & Paste Your Code Here'/>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your code here..."></textarea>
          <br></br>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose the programming language and it will read your code.</label>
          <div className='flex items-center justify-center'>
            <ButtonGroup outline>
              <Button>Java</Button>
              <Button>C#</Button>
              <Button>PHP</Button>
              <Button>Python</Button>
            </ButtonGroup>
          </div>

          <br></br>
          <br></br>

          <div className="grid grid-cols-2">
            <p className="text-center font-semibold col-span-2">Results</p>
            <br></br>

            <div className="col-span-2 grid grid-cols-2 gap-5">
              <p className="flex items-center justify-end font-bold">Cyclomatic Complexity</p>
              <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
            </div>

            <br></br>

            <div className="col-span-2 grid grid-cols-2 gap-5">
              <p className="flex items-center justify-end font-bold">Nodes</p>
              <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
              <p className="flex items-center justify-end font-bold">Edges</p>
              <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-5 pt-2">
              <p className="flex items-center justify-end font-bold">Components</p>
              <p className="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
            </div>
          </div>

        </div>

        <div className="col-span-1 bg-blue-300 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Right */}
          <div className="h-96 bg-white rounded-lg p-2">
            <p>Code Preview</p>
            {/* INSERT READ CODE HERE */}
          </div>
        </div>
        <Button className='w-full col-start-2'>Save</Button>
      </div>
    </div>
  );
}
