const mongoose = require('mongoose')
const { randomUUID } = require('crypto');

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