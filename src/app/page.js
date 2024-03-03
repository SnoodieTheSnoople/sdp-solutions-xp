import { Button, ButtonGroup, FileInput, Label } from 'flowbite-react';

export default function Home() {
  return (
    <div>
      <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <p>[IMAGE]</p>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">
        <div class="col-span-1 bg-slate-100 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Left */}
          <div>
            {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}

            <div>
              <Label htmlFor="file-upload-helper-text" value='Upload File'/>
            </div>
            <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
          </div>

          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400">Alternatively</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Copy & Paste Your Code Here</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          <br></br>

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose the programming language and it will read your code.</label>
          <div className="grid grid-cols-4 gap-0">
              <Button color="gray" className='w-full rounded-r-none'>Java</Button>
              <Button color="gray" className='w-full rounded-none'>C#</Button>
              <Button color="gray" className='w-full rounded-none'>PHP</Button>
              <Button color="gray" className='w-full rounded-l-none'>Python</Button>
          </div>
          
          <br></br>
          <br></br>

          <div class="grid grid-cols-2">
            <p class="text-center font-semibold col-span-2">Results</p>
            <br></br>

            <div class="col-span-2 grid grid-cols-2 gap-5">
              <p class="flex items-center justify-end font-bold">Cyclomatic Complexity</p>
              <p class="flex items-center justify-center bg-white rounded-lg w-10 h-10" id="ccResults">0</p>
            </div>
          </div>

        </div>

        <div class="col-span-1 bg-slate-100 rounded-lg pt-10 pl-4 pr-4 pb-10">
          {/* Right */}
          <div class="h-96 bg-white rounded-lg p-2">
            <p>Code Preview</p>
            {/* INSERT READ CODE HERE */}
          </div>
        </div>

        <Button color='dark' className='col-start-2'>SAVE</Button>
      </div>
    </div>
  );
}
