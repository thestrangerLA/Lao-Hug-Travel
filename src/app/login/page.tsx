'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const contentData = {
    en: {
        back: 'Back to Home',
        title: 'Login',
        description: 'Enter your email below to login to your account.',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        forgotPassword: 'Forgot your password?',
        loginButton: 'Login',
        googleButton: 'Login with Google',
        noAccount: 'Don\'t have an account?',
        signUp: 'Sign up',
    },
    th: {
        back: 'กลับหน้าหลัก',
        title: 'เข้าสู่ระบบ',
        description: 'ป้อนอีเมลของคุณด้านล่างเพื่อเข้าสู่ระบบบัญชีของคุณ',
        emailLabel: 'อีเมล',
        passwordLabel: 'รหัสผ่าน',
        forgotPassword: 'ลืมรหัสผ่าน?',
        loginButton: 'เข้าสู่ระบบ',
        googleButton: 'เข้าสู่ระบบด้วย Google',
        noAccount: 'ยังไม่มีบัญชี?',
        signUp: 'สมัครสมาชิก',
    },
    ar: {
        back: 'العودة إلى الرئيسية',
        title: 'تسجيل الدخول',
        description: 'أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك.',
        emailLabel: 'البريد الإلكتروني',
        passwordLabel: 'كلمة المرور',
        forgotPassword: 'هل نسيت كلمة المرور؟',
        loginButton: 'تسجيل الدخول',
        googleButton: 'تسجيل الدخول باستخدام جوجل',
        noAccount: 'ليس لديك حساب؟',
        signUp: 'اشتراك',
    },
    cn: {
        back: '返回首页',
        title: '登录',
        description: '在下方输入您的电子邮件以登录您的帐户。',
        emailLabel: '电子邮件',
        passwordLabel: '密码',
        forgotPassword: '忘记密码？',
        loginButton: '登录',
        googleButton: '使用谷歌登录',
        noAccount: '没有帐户？',
        signUp: '注册',
    }
}

export default function LoginPage() {
  const { lang } = useLang();
  const content = contentData[lang] || contentData.en;

  return (
    <div className="container py-12">
      <Button asChild variant="ghost" className="mb-4">
          <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {content.back}
          </Link>
      </Button>
      <div className="flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">{content.title}</CardTitle>
            <CardDescription>
              {content.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">{content.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{content.passwordLabel}</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    {content.forgotPassword}
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {content.loginButton}
              </Button>
              <Button variant="outline" className="w-full">
                {content.googleButton}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {content.noAccount}{' '}
              <Link href="/signup" className="underline">
                {content.signUp}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
