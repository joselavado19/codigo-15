export default function Resum(){
    return(
        <div className="bg-primary rounded-md text-white px-5 py-10 my-5">
          <div  className="flex justify-between">
            <div>
              <h3 className="font-semibold">Tip amaount</h3>
              <p className="text-gray-300">/ person</p>
            </div>
            <div>
              <h4 className="text-3xl text-green-200" id="tip-amount">$ 4.27</h4>
            </div>
          </div>
          
          <div  className="flex justify-between items-center mt-7">
            <div>
              <h3 className="font-semibold">Tip amaount</h3>
              <p className="text-gray-300">/ person</p>
            </div>
            <div>
              <h4 className="text-3xl text-green-200" id="total">$ 32.79</h4>
            </div>

           
          </div>

          <div className="mt-5 text-center">
              <button className="w-full text-green-900 bg-green-100 p-3 rounded-md font-semibold text-xl">Reset</button>
          </div>
          
        </div>
    );
}