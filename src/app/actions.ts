'use server';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export async function editHttpRequest(data: any) {
    // http request logic here
    await delay(Math.floor(Math.random() * (2500 - 400 + 1)) + 400);

    return { success: true, error: ""};
}

export async function resetHttpRequest(data: any) {
    // http request logic here
    await delay(Math.floor(Math.random() * (2500 - 400 + 1)) + 400);

    return { success: true, error: ""};
};
