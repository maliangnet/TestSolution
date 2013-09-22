﻿using System;
using SC = System.Collections;
using System.Collections;
using System.Collections.Generic;
namespace Web.Models
{
    public class Test
    {
        public static int Test1()
        {
            Stack<int> stack = new Stack<int>();
            stack.Push(8); 
            return stack.Pop();
        }
    }

    public class interFaceGeneric<T1,T2>
    {
        string name {set;get;}
        int age { set; get; }
    }


    public class Stack1<T1, T2> : interFaceGeneric<T1, T2>
    {
        public string name { set; get; }
        public int age { set; get; }
    }

    public class Stack<T>
    {
        private T[] store;
        private int size;
        public Stack()
        { 
            store = new T[10];
            size = 0;
        }

        public void Push(T x)
        {
            store[size++] = x;
        }
        public T Pop()
        {
            return store[--size];
        }

        delegate double Function(int x);

        static void Foo(double factor)
        {
            Function f = delegate(int x) 
            {
                return x * factor;
            };
            f(1);
        }

    }

    partial    class  AA
    {
         void a()
        {
            object obj = null;
            int? partial = 3;
            int c = partial.Value;
        }
    }

    public class BB
    {
        private const int a = 3;

        protected void b()
        {
            var a = new AA();
            SC::ArrayList a1 = null;
        }
        
    }

    public static class Extensions
    {
        public static void Foo(this string s)
        { }

        public static void T()
        {
            
            String s1 = "Hello World!";
            s1.Foo();
            int a = 3;
            var a1 = new { name=1};


            ClassInit ci = new ClassInit(1) { Name="1"};
            
        }
    }

    public class ClassInit
    {
        delegate int x(int i) ;
        public ClassInit(int a)
        {

            List<int> list = new List<int>();
            list.FindAll(delegate(int i) { return true; });
            list.FindAll(s => s.ToString() == "abc");

            int[] c = new int[] { 1,2,3,4};
            int x = 3;
            int c1 = x => x * 10;
        
        }

        public string Name { set; get; }
    }


    

}