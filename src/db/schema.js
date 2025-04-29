const mongoose = require('mongoose')
const { randomUUID } = require('crypto');

/**
 * User schema definition
 * 
 * @typedef User
 * @property {string} _id
 * @property {string} login
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} salt
 * @property {string} role
 * @property {string} token
 * @property {string} refreshToken
 * @property {Date} refreshTokenExpiry
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deletedAt
 * @property {boolean} isActive
 */
const User = mongoose.model('User', {
    _id: {
        type: mongoose.Schema.Types.UUID,
        required: true,
        default: randomUUID(),
        unique: true
    },
    login: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 20
        },
        unique: true
    },
    name: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 50
        }
    },
    email: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 50
        },
        unique: true
    },
    password: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 150
        }
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin', 'moderator']
    },
    token: {
        type: String,
        required: true,
        default: null
    },
    refreshToken: {
        type: String,
        required: true,
        default: null
    },
    refreshTokenExpiry: {
        type: Date,
        required: true,
        default: null
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: null
    },
    deletedAt: {
        type: Date,
        required: true,
        default: null
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
});

/**
 * Post schema definition
 * 
 * @typedef Post
 * @property {string} _id
 * @property {string} title
 * @property {string} url
 * @property {string} description
 * @property {string} content
 * @property {boolean} isPublished
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deletedAt
 * @property {string} author
 * @property {string[]} tags
 * @property {string[]} comments
 */
const Post = mongoose.model('Post', {
    _id: {
        type: mongoose.Schema.Types.UUID,
        required: true,
        default: randomUUID(),
        unique: true
    },
    title: {
        type: String,
        required: true,
        length: {
            min: 50,
            max: 500
        }
    },
    url: {
        type: String,
        required: true,
        length: {
            min: 50,
            max: 600
        },
        unique: true
    },
    description: {
        type: String,
        required: true,
        length: {
            min: 100,
            max: 600
        }
    },
    content: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: null
    },
    deletedAt: {
        type: Date,
        required: true,
        default: null
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Tag'
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Comment'
    }
});

/**
 * Comment schema definition
 * 
 * @typedef Comment
 * @property {string} _id
 * @property {string} text
 * @property {string} author
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deletedAt
 */
const Comment = mongoose.model('Comment', {
    _id: {
        type: mongoose.Schema.Types.UUID,
        required: true,
        default: randomUUID(),
        unique: true
    },
    text: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 500
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: null
    },
    deletedAt: {
        type: Date,
        required: true,
        default: null
    }
});

/**
 * Tag schema definition
 * 
 * @typedef Tag
 * @property {string} _id
 * @property {string} name
 * @property {string} url
 * @property {string} author
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Date} deletedAt
 */
const Tag = mongoose.model('Tag', {
    _id: {
        type: mongoose.Schema.Types.UUID,
        required: true,
        default: randomUUID(),
        unique: true
    },
    name: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 50
        },
        unique: true
    },
    url: {
        type: String,
        required: true,
        length: {
            min: 5,
            max: 50
        },
        unique: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: null
    },
    deletedAt: {
        type: Date,
        required: true,
        default: null
    }
});

module.exports = {
    User,
    Post,
    Comment,
    Tag
}