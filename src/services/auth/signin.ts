// typesは後ほど定義
import { ApiContext, User } from 'types'
// 先ほど定義した src/utils/index.tsから読み込み
import { fetcher } from 'utils'

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは　"password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return (
    await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/suth/signin`),
    {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin