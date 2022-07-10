// this is schema for our user
export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference',
    to: [{ type: 'user' }]
}