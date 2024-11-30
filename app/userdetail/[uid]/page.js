const Page=async({params})=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users/'+params.uid);
    let user = await data.json();
    return(
        <>
            <h2>Showing detail of user having id={params.uid}</h2>
            <p>
                Name : {user.name} <br />
                Username : {user.username} <br />
                Email : {user.email} <br />
                Website : {user.website}
            </p>
        </>
    );
}
export default Page;