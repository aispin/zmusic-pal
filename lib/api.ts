// Replies stay in the browser while the AI service is offline.
export async function sendMessage(_content: string): Promise<string> {
  return 'AI伙伴功能暂时下线啦，可以访问 [https://zoejane.net/](https://zoejane.net/) 了解最新进展喔';
}
