import prisma from "../src/lib/prisma";

async function main() {
  console.log("Testing database connection...");
  try {
    const leadCount = await prisma.lead.count();
    console.log(`Connection successful. Current lead count: ${leadCount}`);
    
    console.log("Testing lead creation...");
    const testLead = await prisma.lead.create({
      data: {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message from automation.",
        ip: "127.0.0.1",
        userAgent: "Automation Script"
      }
    });
    console.log("Lead created successfully with ID:", testLead.id);
    
    // Clean up
    await prisma.lead.delete({
      where: { id: testLead.id }
    });
    console.log("Cleanup: Test lead deleted.");
    
  } catch (error) {
    console.error("Database error occurred:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
