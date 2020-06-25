export const state = () => {
  return{
    posts: [
      {
        id: 1,
        title: 'My first post',
        subtitle: 'My first subtitle post',
        createdAt: new Date(),
        isRead: true
      },
      {
        id: 2,
        title: 'My second post',
        subtitle: 'My seconf subtitle post',
        createdAt: new Date(),
        isRead: false
      }
    ]
  }
}
