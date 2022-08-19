import { getAllWorksQuery, getCurrentWorkQuery, getFeaturedWorkQuery, getLandingPageQuery, getAllLabsQuery, getCurrentLabQuery } from "./queries"
import Error from "next/error";

async function fetchAPI(query, { variables } = {}) {
    const res = await fetch("https://api-eu-central-1.hygraph.com/v2/ckv4b7lys39ga01xvfao47nld/master", {
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
    })
    const json = await res.json();

    if (json) {
        return json;
    } else if (!json) {
        throw new Error('Failed to fetch API: ' + json)
    }
}

export async function getLandingPage() {
    try {
        const data = await fetchAPI(getLandingPageQuery);
        if (data) {
            return data?.data?.page;
        } else if (!data) {
            throw Error;
        }
    } catch (e) {
        console.error(e);
    }
}

export async function getWorkBySlug(slug) {
    const data = await fetchAPI(getCurrentWorkQuery, {variables: {slug}} )
    return data?.data?.work;
}

export async function getLabBySlug(slug) {
    const data = await fetchAPI(getCurrentLabQuery, {variables: {slug}} )
    return data?.data?.lab;
}

export async function getFeaturedWork() {
    const data = await fetchAPI(getFeaturedWorkQuery)
    return data?.data?.works;
}

export async function allWorkPages() {
    const data = await fetchAPI(getAllWorksQuery)
    return data?.data?.works;
}

export async function allLabPages() {
    const data = await fetchAPI(getAllLabsQuery)
    return data?.data?.labs;
}