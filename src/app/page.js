import Link from 'next/link';
import { Button, FileInput, Label, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import NavbarComponent from '@/components/navbar';
import FileUploadComponent from '@/components/fileUpload';
import Divider from '@/components/divider';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent />

      {/* Main */}
      <div className="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">

        <div className="col-span-1 bg-slate-100 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Left */}
          <FileUploadComponent />

          {/* <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Alternatively</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div> */}

          <Divider><p>Alternatively</p></Divider>

          
          {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Copy & Paste Your Code Here</label> */}
          <Label htmlFor="message" value='Copy & Paste Your Code Here'/>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          <br></br>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose the programming language and it will read your code.</label>
          <div className="grid grid-cols-4 gap-0">
              <Button color="gray" className='w-full rounded-r-none'>Java</Button>
              <Button color="gray" className='w-full rounded-none'>C#</Button>
              <Button color="gray" className='w-full rounded-none'>PHP</Button>
              <Button color="gray" className='w-full rounded-l-none'>Python</Button>
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
          </div>

        </div>

        <div className="col-span-1 bg-slate-100 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Right */}
          <div className="h-96 bg-white rounded-lg p-2">
            <p>Code Preview</p>
            {/* INSERT READ CODE HERE */}
          </div>
        </div>
        <Button color="light" className='w-full col-start-2'>Analyze</Button>
      </div>
    </div>
  );
}
