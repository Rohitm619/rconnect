import "./Body.css";

function Body() {
  return (
    <div className="BodyComponent fluid-container p-2 lg:mt-2">
      <div className="grid lg:grid-cols-5 justify-items-center gap-3">
        <div className="hidden lg:block glass h-80 col-span-1 w-full text-center">
          1
        </div>
        <div className="glass h-80 col-span-3 w-full text-center">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="hidden lg:block glass h-80 col-span-1 w-full text-center">
          3
        </div>
      </div>
    </div>
  );
}

export default Body;
