// this is schema for cooment, di field ada type ke postedBy, nah itu mesti kita buat, itu ada di file postedBy.js
export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy'
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string'
        }
    ]
}