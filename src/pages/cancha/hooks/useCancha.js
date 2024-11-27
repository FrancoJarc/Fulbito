export async function useCancha() {
    try {
        const response = await fetch("http://localhost:3000/canchas");
        const canchas = await response.json();
        return canchas
    } catch (error) {
        console.log(error)
    }
}
