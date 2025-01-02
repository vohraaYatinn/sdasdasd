"use client"
import { buyFunction } from '@/hooks/CommonFunctions';

function Page() {


  return (
    <div>
      <h1>Buy a T-Shirt</h1>
      <button onClick={buyFunction}>Buy Now</button>
    </div>
  );
}

export default Page;