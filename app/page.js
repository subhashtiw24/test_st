'use client';
import { useRouter } from "next/navigation";
const Home=()=>{
    //console.log("hello from Home");
    const router=useRouter();
    return(
        <>
            <h2>Home</h2>
            <p>
                Some text for Home goes here.
            </p>

            <p>
                <input type="button" value="Show all users" onClick={()=>router.push("/users")} />
            </p>
        </>
    );
}
export default Home;