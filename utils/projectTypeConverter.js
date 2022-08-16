export default function projectTypeConverter(params) {
    let result = {
        title: '',
        slug: params
    }
    switch (params) {
        case 'web_design':
            result.title = 'Web Design'
            break
        case 'web_app':
            result.title = 'Web App'
            break
    }
    return result;
}