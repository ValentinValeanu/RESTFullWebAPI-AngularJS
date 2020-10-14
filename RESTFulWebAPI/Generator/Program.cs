using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using DataModel;

namespace Generator
{
    class Program
    {
        // Generates, updates and views entries in the database
        static void Main(string[] args)
        {
            Console.WriteLine("Are you sure?");
            Console.ReadKey();

            using (var dbcontext = new DataContext())
            {
                List<Student> students = new List<Student>()
                {
                    new Student
                    {
                        Name = "Vladimir Lenin",
                        Age = 50,
                        Nationality = "Russian",
                        Description = "Lenin Vladimir Ilyich Ulyanov, better known as Lenin (April 22, 1870 – January 21, 1924) was a Russian revolutionary and the leader of the Bolshevik party. He was the first leader of the USSR and the Communist government that took over Russia in 1917. Lenin is also known as the creator of Leninism a version of Communism that he adapted for the Soviet Union.",
                        Picture = Convert.ToBase64String(File.ReadAllBytes("~/../../../Images/lenin.jpg"))
                    },
                    new Student
                    {
                        Name = "Mikhail Gorbachev",
                        Age = 25,
                        Nationality = "Russian",
                        Description = "Mikhail Gorbachev played a key role in dismantling the Communist grip on power in both the Soviet Union and Eastern Europe. His aspirations for democracy and reform opened up the way for the end of the Cold War and the bringing down of the Berlin Wall. He was removed from Presidential office in 1991, during a failed coup attempt. Since leaving office, Gorbachev has worked tirelessly promoting new efforts at social justice and concern for the environment through his own organization, the Green Cross.",
                        Picture = Convert.ToBase64String(File.ReadAllBytes("~/../../../Images/gorbachev2.jpg"))
                    },
                    new Student
                    {
                        Name = "Winston Churchill",
                        Age = 52,
                        Nationality = "British",
                        Description = "Sir Winston  Churchill (30 November 1874 – 24 January 1965) was a British politician and author, best known as Prime Minister of the United Kingdom during the Second World War.Churchill was famous for his stubborn resistance to Hitler during the darkest hours of the Second World War.",
                        Picture = Convert.ToBase64String(File.ReadAllBytes("~/../../../Images/200-Sir_Winston_S_Churchill.jpg"))
                    }
                };

                foreach (Student student in students)
                {

                    dbcontext.Students.Add(student);
                }

                dbcontext.SaveChanges();
            }
        }
    }
}
