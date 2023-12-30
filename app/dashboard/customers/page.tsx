export default async function Page() {
    const wait = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 1000);
    });

    return <p>Customers Page</p>;
}