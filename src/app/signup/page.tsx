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
        backToLogin: 'Back to Login',
        title: 'Sign Up',
        description: 'Enter your information to create an account.',
        fullNameLabel: 'Full name',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        createAccountButton: 'Create an account',
        googleButton: 'Sign up with Google',
        hasAccount: 'Already have an account?',
        loginLink: 'Log in',
    },
    th: {
        backToLogin: 'กลับไปหน้าล็อคอิน',
        title: 'สมัครสมาชิก',
        description: 'ป้อนข้อมูลของคุณเพื่อสร้างบัญชี',
        fullNameLabel: 'ชื่อเต็ม',
        emailLabel: 'อีเมล',
        passwordLabel: 'รหัสผ่าน',
        createAccountButton: 'สร้างบัญชี',
        googleButton: 'สมัครด้วย Google',
        hasAccount: 'มีบัญชีอยู่แล้ว?',
        loginLink: 'เข้าสู่ระบบ',
    },
    ar: {
        backToLogin: 'العودة إلى تسجيل الدخول',
        title: 'اشتراك',
        description: 'أدخل معلوماتك لإنشاء حساب.',
        fullNameLabel: 'الاسم الكامل',
        emailLabel: 'البريد الإلكتروني',
        passwordLabel: 'كلمة المرور',
        createAccountButton: 'إنشاء حساب',
        googleButton: 'التسجيل باستخدام جوجل',
        hasAccount: 'هل لديك حساب بالفعل؟',
        loginLink: 'تسجيل الدخول',
    },
    cn: {
        backToLogin: '返回登录',
        title: '注册',
        description: '输入您的信息以创建帐户。',
        fullNameLabel: '全名',
        emailLabel: '电子邮件',
        passwordLabel: '密码',
        createAccountButton: '创建帐户',
        googleButton: '使用谷歌注册',
        hasAccount: '已有帐户？',
        loginLink: '登录',
    },
};

export default function SignupPage() {
  const { lang } = useLang();
  const content = contentData[lang] || contentData.en;

  return (
    <div className="container py-12">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {content.backToLogin}
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
                    <Label htmlFor="full-name">{content.fullNameLabel}</Label>
                    <Input id="full-name" placeholder="John Doe" required />
                    </div>
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
                    <Label htmlFor="password">{content.passwordLabel}</Label>
                    <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                    {content.createAccountButton}
                    </Button>
                    <Button variant="outline" className="w-full">
                    {content.googleButton}
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    {content.hasAccount}{' '}
                    <Link href="/login" className="underline">
                    {content.loginLink}
                    </Link>
                </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
