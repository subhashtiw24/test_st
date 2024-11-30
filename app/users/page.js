import Link from "next/link";
const Page=async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await data.json();
    console.log("here : ",users);
    return(
        <>
            <h2>Showing users from API</h2>
            {
                users.map(user=>{return(
                    <div key={user.id}>
                            <h3><Link href={"/userdetail/"+user.id}>{user.name}</Link></h3>
                    </div>
                )})
            }
        </>
    );
}
export default Page;