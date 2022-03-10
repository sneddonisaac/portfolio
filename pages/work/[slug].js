import { client } from "../../utils/sanity-client";
import { useState, useEffect } from "react";
import Layout from '../../templates/Layout'
import { useRouter } from "next/router";

export default function Works() {
    const router = useRouter();
    const slug = router.query.slug;

    const [work, setWork] = useState(null);

    useEffect(() => {
        const slugField = `
            "slug": slug.current
        `;

        const query = `*[_type == "works" && defined(slug.current)][].slug.current`;

        client.fetch(query).then((data) => {
            setWork(data);
        });
    }, []);

    console.log(work)

    return (
        <Layout>
        </Layout>
    )
}