const Navbar = {
    background: "white",
    color: "black",
    height: "5vh",
};

const viewContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "10px",
    background: "green",
    height: "80vh",
};

const left = {
    background: "red",
};

const right = {
    background: "blue",
};

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-10 bg-black" >
        <p className="text-white">[Logo]</p>
      </div>

      <div className="grid grid-cols-2 gap-1 bg-green h-[80vh]">
        <div className="flex flex-wrap w-full bg-red-600 justify-center p-2 gap-2">
          <div className="w-full h-64 bg-white">
            <p>File drop component</p>
          </div>
          
          <div className="grid grid-cols-4 w-full h-12 bg-white content-center gap-1">
            <div className="bg-blue-100">
              <p className="text-center">Java</p>
            </div>

            <div className="bg-blue-100">
              <p className="text-center">Python</p>
            </div>

            <div className="bg-blue-100">
              <p className="text-center">PHP</p>
            </div>

            <div className="bg-blue-100">
              <p className="text-center">C#</p>
            </div>
          </div>
          
          <div className="bg-white h-6">
            <h2>RESULTS</h2>
          </div>

          <div className="grid grid-cols-2 w-full">
            <div className="col-span-2">
              <p>Cyclomatic Complexity</p>
            </div>

            <div className="col-span-2">
              <p>Nodes</p>
            </div>

            <div className="col-span-2">
              <p>Edges</p>
            </div>
            
            <div className="col-span-2">
              <p>Connected Components</p>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap w-full bg-blue-600 justify-center p-2 gap-2">
          <div className="w-full h-full bg-white">
            <p>PREVIEW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
