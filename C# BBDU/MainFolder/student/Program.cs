using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace student
{
    internal class Program
    {
        int rollno;
        string name;
        string course;

        Program()
        {
            rollno = 0;
            name = "";
            course = "";
        }
        Program(int rollno, string name, string course)
        {
            this.rollno = rollno;
            this.name = name;
            this.course = course;
        }
        Program(Program p)
        {
            rollno = p.rollno;
            name = p.name;
            course = p.course;
        }

        public void display()
        {
            Console.WriteLine("Roll No: " + rollno);
            Console.WriteLine("Name: " + name);
            Console.WriteLine("Course: " + course);
        }

        static void Main(string[] args)
        {
            Program p1 = new Program();
            Program p2 = new Program(1, "John", "B.Tech");
            Program p3 = new Program(p2);

            p1.display();
            p2.display();
            p3.display();
        }
    }
}
