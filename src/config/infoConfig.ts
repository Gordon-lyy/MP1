export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Gordon Liu'
export const headline = 'Student at Shanghai Soong Ching Ling School.'
export const introduction =
  "Hi! I'm Gordon. I'm a student at Shanghai Soong Ching Ling School. I'm enjoying coding and learning new things. "
export const email = '202760150@stu.scls-sh.org'
export const githubUsername = 'Gordon-lyy'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi! I'm Gordon. I'm a student at Shanghai Soong Ching Ling School. I'm enjoying coding and learning new things. ",
  'I am now a member of AI camp, working on my first mini project. I like this kind of activity very much and find it very interesting。',
  "I started this blog to document my learning process and share it with others. It can also let others know the fun of computers.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
