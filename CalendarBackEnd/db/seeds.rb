5.times do 
  Event.create({
    title: Faker::Football.team, 
    description: Faker::Football.competition,
    start_time: Faker::Time.between(0.days.ago, Date.today, :day),
  end_time: Faker::Time.between(0.days.ago, Date.today, :night)

  })
end