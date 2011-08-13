task :default => :compile

task :compile do
  Dir["**/*.coffee"].each do |f|
    puts "* compiling #{f}"
    system "coffee -cb #{f}"
  end
end

task :clean do
  Dir["**/*.coffee"].each do |f|
    file = "#{f.split('.')[0...-1].join('.')}.js"
    if File.exist?(file)
      puts "* removing #{file}"
      File.delete(file)
    end
  end
end
