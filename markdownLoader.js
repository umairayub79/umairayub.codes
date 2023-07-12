const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getMarkdownFiles() {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data,
            content,
        };
    });

    return posts;
}

module.exports = { getMarkdownFiles };