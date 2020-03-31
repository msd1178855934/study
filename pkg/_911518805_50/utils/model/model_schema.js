module.exports = {
    PoiSchema: {
        schemaName: "poi",
        id: String,
        isMark: Number,
        name: String,
        categoryName: String,
        area: String,
        price: Number,
        topImageUrl: String
    },
    CommentSchema: {
        schemaName: "comment",
        id: String,
        isLike: Number,
        likeCount: Number,
        subCommentCount: Number
    },
    ContactSchema: {
        schemaName: "contact",
        id: String,
        follow: Number,
        fansCount: Number
    },
    NumberSchema: {
        schemaName: "number",
        id: String,
        number: Number
    },
    StringSchema: {
        schemaName: "number",
        id: String,
        string: String
    }
};